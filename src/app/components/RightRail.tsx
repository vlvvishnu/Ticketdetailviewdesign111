import { CheckCircle2, FileText, User, Clock, Paperclip, AtSign } from 'lucide-react';
import { useState } from 'react';

interface TimelineEvent {
  time: string;
  text: string;
  icon: 'create' | 'update' | 'complete';
  day?: string;
}

interface Comment {
  id: number;
  author: string;
  avatar: string;
  timestamp: string;
  text: string;
  relatedTo?: string;
}

export function RightRail() {
  const [commentText, setCommentText] = useState('');

  const timelineEvents: TimelineEvent[] = [
    { time: '10:02', text: 'Ticket created (FD imported)', icon: 'create', day: 'Today' },
    { time: '10:15', text: '"Enable / Disable Trigger" marked Done', icon: 'complete' },
    { time: '10:20', text: 'Credential updated for App X', icon: 'update' },
    { time: '11:45', text: 'RCA analysis started', icon: 'update', day: 'Yesterday' },
    { time: '14:30', text: 'Priority changed to P1', icon: 'update' },
    { time: '16:00', text: 'Assigned to L2 – App Team', icon: 'update' },
  ];

  const comments: Comment[] = [
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: 'SC',
      timestamp: '2h ago',
      text: 'Initial investigation shows the issue is related to session timeout configuration in the auth service.',
      relatedTo: 'Identify RCA'
    },
    {
      id: 2,
      author: 'Mike Johnson',
      avatar: 'MJ',
      timestamp: '1h ago',
      text: 'Updated credentials for the staging environment. Prod credentials will be updated after approval.',
      relatedTo: 'Credential Management'
    },
    {
      id: 3,
      author: 'Alex Kumar',
      avatar: 'AK',
      timestamp: '30m ago',
      text: 'Can we schedule a quick sync to discuss the trigger workflow? I have some concerns about the current approach.',
    }
  ];

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'create':
        return <FileText className="size-3" />;
      case 'complete':
        return <CheckCircle2 className="size-3" />;
      case 'update':
      default:
        return <Clock className="size-3" />;
    }
  };

  return (
    <div className="w-[380px] border-l border-gray-200 bg-white flex flex-col h-screen sticky top-0">
      {/* Timeline Section */}
      <div className="flex-1 overflow-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h2>
          
          <div className="space-y-4">
            {timelineEvents.map((event, idx) => (
              <div key={idx}>
                {event.day && (
                  <div className="text-xs font-semibold text-gray-500 mb-2 mt-4 first:mt-0">
                    {event.day}
                  </div>
                )}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    {getTimelineIcon(event.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 mb-1">{event.time}</div>
                    <div className="text-sm text-gray-900">{event.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Comments</h2>
          
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center text-xs font-semibold">
                  {comment.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-gray-900">{comment.author}</span>
                    <span className="text-xs text-gray-500">{comment.timestamp}</span>
                  </div>
                  {comment.relatedTo && (
                    <div className="mb-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-[rgba(0,0,0,0.02)] text-[rgba(0,0,0,0.88)] border border-[#d9d9d9]">
                        Related to: {comment.relatedTo}
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-gray-700">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Comment Box */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment…"
            className="w-full p-3 text-sm resize-none border-0 focus:outline-none focus:ring-0"
            rows={3}
          />
          <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200 bg-gray-50">
            <div className="flex gap-2">
              <button className="text-gray-500 hover:text-gray-700">
                <Paperclip className="size-4" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <AtSign className="size-4" />
              </button>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800">
                Cancel
              </button>
              <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 font-medium">
                Add comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}