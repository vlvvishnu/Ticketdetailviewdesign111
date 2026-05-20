import { MessageSquare, Send, Bot, User, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { type Subtask } from '@/app/components/SubtaskTabs';
import { type ActivityEvent } from '@/app/components/ActivityCard';

interface ChatMessage {
  id: number;
  sender: 'user' | 'bot';
  message: string;
  timestamp: string;
}

interface AskAREPanelProps {
  ticketId?: string;
  ticketTitle?: string;
  subtasks?: Subtask[];
  activities?: ActivityEvent[];
  tenantWorkflowData?: Array<{
    tenant: string;
    workflow: string;
    workflowType: string;
    period: string;
  }>;
}

export function AskAREPanel({ 
  ticketId = 'TK-12458',
  ticketTitle = 'Workflow execution failure',
  subtasks = [],
  activities = [],
  tenantWorkflowData = []
}: AskAREPanelProps) {
  // Extract ticket context from props
  const TICKET_CONTEXT = {
    ticketId,
    title: ticketTitle,
    priority: 'Critical',
    status: 'In Progress',
    tenant: tenantWorkflowData[0]?.tenant || 'N/A',
    workflow: tenantWorkflowData[0]?.workflow || 'N/A',
    workflowType: tenantWorkflowData[0]?.workflowType || 'N/A',
    period: tenantWorkflowData[0]?.period || 'N/A',
    assignedTo: 'Sarah Chen',
    subtasks: subtasks.map(s => ({
      id: s.id,
      title: s.title,
      status: s.status,
      owner: 'Sarah Chen'
    })),
    recentActivity: activities.slice(0, 5).map(a => ({
      action: a.action,
      user: a.user,
      time: a.timestamp
    }))
  };

  // Context-aware response generator
  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Ticket status queries
    if (lowerMessage.includes('status') || lowerMessage.includes('what is') || lowerMessage.includes('current')) {
      return `The ticket ${TICKET_CONTEXT.ticketId} is currently ${TICKET_CONTEXT.status}. It's a ${TICKET_CONTEXT.priority} priority issue for ${TICKET_CONTEXT.tenant}'s ${TICKET_CONTEXT.workflow} workflow, assigned to ${TICKET_CONTEXT.assignedTo}.`;
    }
    
    // Subtask queries
    if (lowerMessage.includes('subtask') || lowerMessage.includes('task') || lowerMessage.includes('progress')) {
      const inProgress = TICKET_CONTEXT.subtasks.filter(s => s.status === 'in-progress');
      const completed = TICKET_CONTEXT.subtasks.filter(s => s.status === 'done');
      return `Out of ${TICKET_CONTEXT.subtasks.length} subtasks, ${completed.length} are completed and ${inProgress.length} are in progress. Currently working on: ${inProgress.map(s => s.title).join(', ')}.`;
    }
    
    // Workflow queries
    if (lowerMessage.includes('workflow') || lowerMessage.includes('wellsky') || lowerMessage.includes('eligibility')) {
      return `This ticket is for the ${TICKET_CONTEXT.workflow} workflow running for ${TICKET_CONTEXT.tenant}. Recent actions include trigger disable by ${TICKET_CONTEXT.recentActivity[0].user} and workflow termination by ${TICKET_CONTEXT.recentActivity[1].user}.`;
    }
    
    // Owner/assignment queries
    if (lowerMessage.includes('who') || lowerMessage.includes('owner') || lowerMessage.includes('assigned')) {
      return `The ticket is assigned to ${TICKET_CONTEXT.assignedTo}. Other team members working on subtasks include Mike Johnson (Evidence Package) and Alex Kumar (RCA identification, Credential Management).`;
    }
    
    // Priority queries
    if (lowerMessage.includes('priority') || lowerMessage.includes('urgent') || lowerMessage.includes('critical')) {
      return `This is a ${TICKET_CONTEXT.priority} priority ticket that requires immediate attention. It affects the ${TICKET_CONTEXT.workflow} workflow for ${TICKET_CONTEXT.tenant}.`;
    }
    
    // Next steps queries
    if (lowerMessage.includes('next') || lowerMessage.includes('what should') || lowerMessage.includes('do now')) {
      const inProgress = TICKET_CONTEXT.subtasks.filter(s => s.status === 'in-progress');
      return `Focus on completing the in-progress subtasks: ${inProgress.map(s => `${s.id} (${s.title})`).join(', ')}. ${inProgress[0].owner} is currently working on these.`;
    }
    
    // Recent activity queries
    if (lowerMessage.includes('activity') || lowerMessage.includes('recent') || lowerMessage.includes('what happened')) {
      return `Recent activity: ${TICKET_CONTEXT.recentActivity.map(a => `${a.action} by ${a.user} ${a.time}`).join(', ')}. Check the Activity panel for full history.`;
    }
    
    // Help/capabilities query
    if (lowerMessage.includes('help') || lowerMessage.includes('can you') || lowerMessage.includes('what can')) {
      return `I can help you with: ticket status, subtask progress, workflow details, team assignments, priority information, and recent activity. I have full context of ticket ${TICKET_CONTEXT.ticketId}. What would you like to know?`;
    }
    
    // Tenant queries
    if (lowerMessage.includes('tenant') || lowerMessage.includes('archcare')) {
      return `This ticket is for tenant: ${TICKET_CONTEXT.tenant}. The issue affects their ${TICKET_CONTEXT.workflow} workflow operations.`;
    }
    
    // Summary request
    if (lowerMessage.includes('summary') || lowerMessage.includes('overview') || lowerMessage.includes('explain')) {
      return `📋 **Ticket Summary**: ${TICKET_CONTEXT.ticketId} - ${TICKET_CONTEXT.title}\n\n🔴 Priority: ${TICKET_CONTEXT.priority}\n📊 Status: ${TICKET_CONTEXT.status}\n🏢 Tenant: ${TICKET_CONTEXT.tenant}\n⚙️ Workflow: ${TICKET_CONTEXT.workflow}\n👤 Assigned: ${TICKET_CONTEXT.assignedTo}\n✅ Completed: ${TICKET_CONTEXT.subtasks.filter(s => s.status === 'done').length}/${TICKET_CONTEXT.subtasks.length} subtasks`;
    }
    
    // Default contextual response
    return `I'm here to help with ticket ${TICKET_CONTEXT.ticketId}. You can ask me about status, subtasks, workflow details, team assignments, or recent activity. What would you like to know?`;
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'bot',
      message: `👋 Hello! I'm ARE Assistant with full context of ticket ${TICKET_CONTEXT.ticketId}. I can answer questions about status, subtasks, workflows, and team activity. How can I help?`,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: ChatMessage = {
        id: messages.length + 1,
        sender: 'user',
        message: inputValue,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
      setIsTyping(true);

      // Simulate bot thinking and response with context awareness
      setTimeout(() => {
        setIsTyping(false);
        const botResponse: ChatMessage = {
          id: messages.length + 2,
          sender: 'bot',
          message: generateBotResponse(inputValue),
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 800 + Math.random() * 700); // Random delay between 800-1500ms for realism
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Quick action suggestions
  const quickActions = [
    'What\'s the status?',
    'Show subtask progress',
    'Who is working on this?',
    'What should I do next?'
  ];

  const handleQuickAction = (action: string) => {
    setInputValue(action);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200 bg-gradient-to-br from-blue-50 via-white to-white flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="size-5 text-blue-600" />
            <div>
              <h2 className="text-sm font-semibold text-gray-900">Ask ARE Chat</h2>
              <p className="text-xs text-gray-500 mt-0.5">Screen context-aware AI assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">Online</span>
          </div>
        </div>
        
        {/* Context Badge */}
        {(TICKET_CONTEXT.tenant !== 'N/A' || TICKET_CONTEXT.workflow !== 'N/A') && (
          <div className="mt-3 flex flex-wrap gap-2">
            {TICKET_CONTEXT.tenant !== 'N/A' && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-50 border border-purple-200 rounded-md">
                <span className="text-xs font-medium text-purple-700">🏢 {TICKET_CONTEXT.tenant}</span>
              </div>
            )}
            {TICKET_CONTEXT.workflow !== 'N/A' && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 rounded-md">
                <span className="text-xs font-medium text-blue-700">⚙️ {TICKET_CONTEXT.workflow}</span>
              </div>
            )}
            {TICKET_CONTEXT.subtasks.length > 0 && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 border border-green-200 rounded-md">
                <span className="text-xs font-medium text-green-700">✓ {TICKET_CONTEXT.subtasks.filter(s => s.status === 'done').length}/{TICKET_CONTEXT.subtasks.length} tasks</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      {messages.length === 1 && (
        <div className="px-5 py-3 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
          <p className="text-xs font-medium text-gray-600 mb-2">Quick Actions:</p>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickAction(action)}
                className="px-3 py-1.5 text-xs bg-white border border-gray-200 rounded-full hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {/* Avatar */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              msg.sender === 'bot' ? 'bg-gradient-to-br from-blue-100 to-blue-200' : 'bg-gradient-to-br from-gray-200 to-gray-300'
            }`}>
              {msg.sender === 'bot' ? (
                <Bot className="size-4 text-blue-600" />
              ) : (
                <User className="size-4 text-gray-600" />
              )}
            </div>

            {/* Message Bubble */}
            <div className={`flex-1 max-w-[80%] ${msg.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
              <div className={`rounded-lg px-4 py-2.5 shadow-sm ${
                msg.sender === 'bot' 
                  ? 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 border border-gray-200' 
                  : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-line">{msg.message}</p>
              </div>
              <span className="text-xs text-gray-500 mt-1 px-1">{msg.timestamp}</span>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
              <Bot className="size-4 text-blue-600" />
            </div>
            <div className="flex-1 max-w-[80%]">
              <div className="rounded-lg px-4 py-3 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-1">
                  <Loader2 className="size-3 text-blue-600 animate-spin" />
                  <span className="text-xs text-gray-500">ARE is thinking...</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-5 py-4 border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white flex-shrink-0">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about this ticket..."
            disabled={isTyping}
            className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            className="px-4 py-2.5 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            <Send className="size-4" />
          </button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-gray-500">Press Enter to send • Context: {TICKET_CONTEXT.ticketId}</p>
          <span className="text-xs text-gray-400">{messages.length} messages</span>
        </div>
      </div>
    </div>
  );
}