export interface Mood {
  id: string
  name: string
  emoji: string
}

// Centralized emoji library
export const EMOJI_LIBRARY = {
  // Positive emotions
  happy: '😊',
  excited: '🤩',
  calm: '🤗',
  loved: '🥰',
  grateful: '😌',
  
  // Negative emotions
  sad: '😢',
  angry: '😡',
  irritated: '😠',
  anxious: '😰',
  worried: '😟',
  
  // Neutral emotions
  meh: '😑',
  dontKnow: '😐',
  confused: '😕',
  tired: '😴',
  
  // Placeholder
  custom: '➕',
} as const

// Available emojis for picker
export const AVAILABLE_EMOJIS = [
  // Happy/Positive
  '😊', '😃', '😄', '😁', '😆', '😅', '🤣', '😂',
  '🙂', '🙃', '😉', '😇', '🥰', '😍', '🤩', '😘',
  '😗', '☺️', '😚', '😙', '🥲', '😋', '😛', '😜',
  
  // Love/Affection
  '🤗', '🤭', '🫢', '🤫', '🤔', '🫡', '🤐', '🤨',
  
  // Neutral
  '😐', '😑', '😶', '🫥', '😏', '😒', '🙄', '😬',
  
  // Negative/Sad
  '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢',
  '🤮', '🤧', '🥵', '🥶', '😵', '🤯', '🥴',
  
  // Worried/Anxious
  '😕', '🫤', '😟', '🙁', '☹️', '😮', '😯', '😲',
  '😳', '🥺', '🥹', '😦', '😧', '😨', '😰', '😥',
  '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩',
  '😫', '🥱',
  
  // Angry/Frustrated
  '😤', '😡', '😠', '🤬', '😈', '👿',
  
  // Special
  '💀', '☠️', '🤡', '👻', '👽', '🤖', '💩',
  
  // Gestures/Symbols
  '👍', '👎', '👌', '✌️', '🤞', '🫰', '🤟', '🤘',
  '👏', '🙌', '👐', '🤲', '🙏', '✊', '👊', '🤜',
  '❤️', '💔', '💕', '💖', '💗', '💓', '💝', '💘',
  '⭐', '✨', '💫', '⚡', '💥', '🔥', '💯', '✅',
]

// Mood configuration
const MOOD_CONFIG = [
  { id: '1', name: 'Calm', emojiKey: 'calm' },
  { id: '2', name: 'Irritated', emojiKey: 'irritated' },
  { id: '3', name: 'Happy', emojiKey: 'happy' },
  { id: '4', name: 'Anxious', emojiKey: 'anxious' },
  { id: '5', name: 'Sad', emojiKey: 'sad' },
  { id: '6', name: 'Angry', emojiKey: 'angry' },
  { id: '7', name: 'Meh', emojiKey: 'meh' },
  { id: '8', name: "Don't Know", emojiKey: 'dontKnow' },
  { id: '9', name: 'Worried', emojiKey: 'worried' },
  { id: 'custom', name: 'Custom', emojiKey: 'custom' },
] as const

export const moods: Mood[] = MOOD_CONFIG.map(config => ({
  id: config.id,
  name: config.name,
  emoji: EMOJI_LIBRARY[config.emojiKey as keyof typeof EMOJI_LIBRARY]
}))
