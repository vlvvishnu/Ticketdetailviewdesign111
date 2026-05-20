import { useState } from 'react';
import { Plus, MessageSquare, CheckSquare, Paperclip, AtSign, Send, X } from 'lucide-react';
import { Container } from '@/imports/Container';

type ActionType = 'comment' | 'task';

export function ActionCenter() {
  const [inputText, setInputText] = useState('');
  const [actionType, setActionType] = useState<ActionType>('comment');
  const [isOpen, setIsOpen] = useState(false);
  const [isScopeMenuOpen, setIsScopeMenuOpen] = useState(false);

  const handleSubmit = () => {
    if (inputText.trim()) {
      // Handle submission based on action type
      console.log(`${actionType}:`, inputText);
      setInputText('');
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleScopeSubmit = () => {
    // Handle subtask creation with selected scope
    console.log('Creating subtask with selected scope');
    setIsScopeMenuOpen(false);
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
      {/* Scope Selection Modal */}
      {isScopeMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setIsScopeMenuOpen(false)}
          />
          
          {/* Modal - positioned above the plus button */}
          <div className="relative z-10">
            <Container 
              onClose={() => setIsScopeMenuOpen(false)}
              onSubmit={handleScopeSubmit}
            />
          </div>
        </div>
      )}

      {isOpen ? (
        // Expanded input box
        <div className="w-[600px] pointer-events-auto">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200">
            {/* Action type selector */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActionType('comment')}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                  actionType === 'comment'
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <MessageSquare className="size-4" />
                Comment
              </button>
              <button
                onClick={() => setActionType('task')}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                  actionType === 'task'
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <CheckSquare className="size-4" />
                Task
              </button>
              <div className="flex-1" />
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 text-gray-400 hover:text-gray-600"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Input area */}
            <div className="p-3">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  actionType === 'comment'
                    ? 'Add a comment or update... (Esc to close, Cmd+Enter to submit)'
                    : 'Add a new task... (Esc to close, Cmd+Enter to submit)'
                }
                className="w-full px-3 py-2 text-sm resize-none border-0 focus:outline-none focus:ring-0 placeholder:text-gray-400"
                rows={2}
                autoFocus
              />

              {/* Action bar */}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  {/* Quick actions */}
                  <button
                    className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                    title="Attach file"
                  >
                    <Paperclip className="size-3.5" />
                    Attach
                  </button>
                  <button
                    className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                    title="Mention someone"
                  >
                    <AtSign className="size-3.5" />
                    Mention
                  </button>

                  {actionType === 'task' && (
                    <select className="px-2.5 py-1.5 text-xs text-gray-600 border border-gray-200 rounded hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Assign to...</option>
                      <option>Sarah Chen</option>
                      <option>Mike Johnson</option>
                      <option>Alex Kumar</option>
                    </select>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSubmit}
                    disabled={!inputText.trim()}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {actionType === 'comment' ? (
                      <>
                        <Send className="size-3.5" />
                        Post
                      </>
                    ) : (
                      <>
                        <Plus className="size-3.5" />
                        Create
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}