import { getBookmark, getBookmarks } from './bookmarks'
import { getComment, getComments } from './comment'
import { getPost, getPosts } from './posts'
import { getQuestion, getQuestions } from './questions'
import { getTags } from './tags'
import { getUser } from './user'
import { viewer } from './viewer'

export default {
  viewer: viewer,
  user: getUser,
  bookmark: getBookmark,
  bookmarks: getBookmarks,
  posts: getPosts,
  post: getPost,
  question: getQuestion,
  questions: getQuestions,
  comment: getComment,
  comments: getComments,
  tags: getTags,
}
