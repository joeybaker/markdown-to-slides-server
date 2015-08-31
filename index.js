import browserSync from 'browser-sync'
import nodemon from 'nodemon'
import path from 'path'
import os from 'os'
import mkdirp from 'mkdirp'

const htmlFileName = 'index.html'

const startBrowserSync = ({dir, port, markdownFile, open}) => {
  const bs = browserSync.create(markdownFile)

  bs.init({
    server: dir
    , port
    , files: [path.join(dir, htmlFileName)]
    , ghostMode: false
    , online: false
    , notify: false
    , open
  })

  return () => bs.exit()
}

const watchMarkdown = ({markdownFile, title, dir}) => {
  const executablePath = path.join(__dirname, 'node_modules', '.bin/', 'markdown-to-slides')
  nodemon({
    execMap: {
      md: `${executablePath} -t "${title}" -o "${path.join(dir, htmlFileName)}" -d "${markdownFile}"`
    }
    , watch: [markdownFile]
    , ext: 'md'
    , script: markdownFile
  })

  return () => nodemon.emit('quit')
}

export default ({port, markdown, open, title} = {}) => {
  const dir = path.join(os.tmpDir(), path.basename(__dirname))
  mkdirp.sync(dir)

  const options = {dir, port, open, title, markdownFile: markdown}
  options.title || (options.title = path.basename(markdown))

  const closers = [
    watchMarkdown(options)
  , startBrowserSync(options)
  ]

  return () => closers.forEach((x) => x())
}
