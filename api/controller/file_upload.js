const checklist = [
  {
    filename: 'Item 1',
    unpacked: true,
    uploaded: false,
  },
  {
    filename: 'Item 2',
    unpacked: true,
    uploaded: true,
  },
  {
    filename: 'Item 3',
    unpacked: true,
    uploaded: false,
  },
  {
    filename: 'Item 4',
    unpacked: false,
    uploaded: false,
  },
]
const incomplete = []

checklist.forEach((item) => {
  if (item.uploaded === false) incomplete.push(item)
})
if (incomplete.length > 0) {
  console.log('Checklist is incomplete!')
  console.log(incomplete)
} else console.log('Checklist is compeleted!')
