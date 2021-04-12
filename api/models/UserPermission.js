const permission = {
  NONE: 0,
  // Can modify user data in case of need
  ADMINISTRATOR: 1,
  // Can Ban or delete comments
  USER_MODERATION: 1 << 1,
  // Can modify and add series
  SERIES_MANAGE: 1 << 2,
  // Upload and modify chapters
  CHAPTER_MANAGE: 1 << 3,
  // Upgraded members, given to nitro user perhaps
  HONOR_MEMBER: 1 << 4,
  // Normal members, can comment and bookmark and stuff
  MEMBER: 1 << 5,
  // Silenced member, can't see and write comment, but can bookmark
  SILENCED: 1 << 6,
  // Guest members, can only read and search
  GUEST: 1 << 7,
  // Banned member, not allowed to enter website, or read
  BANNED: 1 << 8,
  // Trolling special, is sent to youtube and get epically rick rolled
  // Best served for banned members
  TROLLED: 1 << 9,
}
Object.freeze(permission)
export default permission
// const {
//   ADMINISTRATOR,
//   SERIES_MANAGE,
//   USER_MODERATION,
//   CHAPTER_MANAGE,
//   HONOR_MEMBER,
//   MEMBER,
//   SILENCED,
//   GUEST,
//   BANNED,
//   TROLLED,
// } = roles
// function checkRoles(f) {
//   const permission = []
//   if (f & TROLLED) permission.push('GET TROLLED LOL!')
//   if (f & BANNED) {
//     permission.push("YOU ARE BANNED! PLEASE DON'T COME BACK HERE!")
//     return permission
//   }
//   if (f & ADMINISTRATOR) permission.push('Edit and Modify User Permission')
//   if (f & SERIES_MANAGE) permission.push('Add, edit, and delete series')
//   if (f & USER_MODERATION) permission.push('Silence and delete user comments')
//   if (f & CHAPTER_MANAGE) permission.push('Add and delete series chapters')
//   if (f & HONOR_MEMBER) permission.push('Enjoy extra members perks')
//   if ((f & SILENCED) !== SILENCED && f & MEMBER)
//     permission.push('Read and write comment')
//   if (f & MEMBER) permission.push('Give series rating')
//   if (f & (GUEST | MEMBER)) permission.push('Read series and chapters')
//   return permission
// }
// const administrator =
//   ADMINISTRATOR |
//   USER_MODERATION |
//   SERIES_MANAGE |
//   CHAPTER_MANAGE |
//   HONOR_MEMBER |
//   MEMBER
// const uploader = SERIES_MANAGE | CHAPTER_MANAGE | MEMBER
// const user = MEMBER | SILENCED
// const silenced = SILENCED | MEMBER
// const guest = GUEST
// const banned = BANNED | TROLLED
// const users = {
//   administrator,
//   uploader,
//   user,
//   silenced,
//   guest,
//   banned,
// }
// for (const username in users) {
//   if (Object.hasOwnProperty.call(users, username)) {
//     const element = users[username]
//     console.log('')
//     console.log(`${username} roles: ${element}`)
//     checkRoles(element).forEach((item) => {
//       console.log(item)
//     })
//   }
// }
