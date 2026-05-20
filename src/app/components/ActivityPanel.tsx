import { Search, Bell, MoreVertical, ThumbsUp, MessageSquare, Pin, Link2, Share2 } from 'lucide-react';

type ActivityType = 'comment' | 'system';

interface Activity {
  id: number;
  type: ActivityType;
  // For comments
  author?: string;
  authorInitials?: string;
  text?: string;
  mentions?: string[];
  timestamp: string;
  // For system events
  description?: string;
  changes?: {
    field: string;
    from: string;
    to: string;
  };
}

export function ActivityPanel() {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'system',
      description: 'Days to Resolution was updated',
      timestamp: 'Jan 22 2025 at 3:03 am'
    },
    {
      id: 2,
      type: 'comment',
      author: 'Raja Rajan Solomon',
      authorInitials: 'RS',
      text: '@Tamilselvan Senthilkumar I see that Aditi had asked Karthik to verify if this ticket is already fixed. Could you please verify this and update.',
      mentions: ['@Tamilselvan Senthilkumar'],
      timestamp: 'May 27 2024 at 4:20 pm'
    },
    {
      id: 3,
      type: 'comment',
      author: 'Aditi Phadnis',
      authorInitials: 'AP',
      text: '@karthikeyan If Vetri has fixed this, please check again and close this bug.',
      mentions: ['@karthikeyan'],
      timestamp: 'Dec 26 2023 at 3:45 pm'
    },
    {
      id: 4,
      type: 'system',
      description: 'Vijay Ramanujam changed status from',
      changes: {
        field: 'status',
        from: 'To Do',
        to: 'Approved'
      },
      timestamp: 'Nov 21 2023 at 6:36 pm'
    },
    {
      id: 5,
      type: 'system',
      description: 'Vijay Ramanujam changed priority from',
      changes: {
        field: 'priority',
        from: 'High',
        to: 'Low'
      },
      timestamp: 'Nov 21 2023 at 9:07 am'
    },
    {
      id: 6,
      type: 'comment',
      author: 'karthikeyan (deactivated)',
      authorInitials: 'K',
      text: '@Vetrivel S As discussed, we could view the tenant created success logs in data dog whereas it is not displayed in UI',
      mentions: ['@Vetrivel S'],
      timestamp: 'Nov 20 2023 at 2:15 pm'
    }
  ];

  return (
    <div className="w-[420px] border-l border-gray-200 bg-white flex flex-col h-screen sticky top-0">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Activity</h2>
          <div className="flex items-center gap-2">
            <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
              <Search className="size-4" />
            </button>
            <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded relative transition-colors">
              <Bell className="size-4" />
              <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                5
              </span>
            </button>
            <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
              <MoreVertical className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 space-y-4">
          {activities.map((activity) => (
            <div key={activity.id}>
              {activity.type === 'comment' ? (
                // Comment Card
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  {/* Comment Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                        {activity.authorInitials}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {activity.author}
                        </div>
                        <div className="text-xs text-gray-500">
                          {activity.timestamp}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                        <Pin className="size-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                        <Link2 className="size-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                        <MoreVertical className="size-4" />
                      </button>
                    </div>
                  </div>

                  {/* Comment Text */}
                  <div className="text-sm text-gray-700 leading-relaxed mb-3">
                    {activity.text?.split(' ').map((word, idx) => 
                      word.startsWith('@') ? (
                        <span key={idx} className="text-blue-600 font-medium">{word} </span>
                      ) : (
                        <span key={idx}>{word} </span>
                      )
                    )}
                  </div>

                  {/* Comment Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                        <ThumbsUp className="size-4" />
                      </button>
                      <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                        <MessageSquare className="size-4" />
                      </button>
                    </div>
                    <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">
                      Reply
                    </button>
                  </div>
                </div>
              ) : (
                // System Event
                <div className="flex items-start gap-3 py-1">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-sm text-gray-700">
                        {activity.description}
                        {activity.changes && (
                          <span className="ml-1">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mx-1 ${
                              activity.changes.from === 'High' || activity.changes.from === 'To Do'
                                ? 'bg-orange-100 text-orange-800'
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              {activity.changes.from}
                            </span>
                            to
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mx-1 ${
                              activity.changes.to === 'Approved'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {activity.changes.to}
                            </span>
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 whitespace-nowrap">
                        {activity.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Helper text at bottom */}
      <div className="border-t border-gray-200 p-3 bg-gray-50">
        <p className="text-xs text-gray-500 text-center">
          Use the Action Center (+ button) to add new activity
        </p>
      </div>
    </div>
  );
}
