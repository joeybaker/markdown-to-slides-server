import test from 'tape'
import markdownToSlidesServer from '../index.js'
import path from 'path'

const markdown = path.join(__dirname, 'fixtures/', 'slides.md')
const port = 9999
const open = false

test('markdown-to-slides-server', (t) => {
  const quit = markdownToSlidesServer({markdown, port, open})

  t.equal(
    typeof quit
    , 'function'
    , 'returns a quit function'
  )

  t.end()
  // quit needs to happen after the test ends, else we get an error
  quit()
})
