fetch(
    'https://api.figma.com/v1/files/Gyx6g98YGVPGlGIKCe2Hdg',
    {
      headers: {
        'X-Figma-Token': '186870-0ab5ebcf-c869-415c-8b94-a37cfd975700'
      }
    }
  )
  .then(res => res.json())
  .then(data => {
    // 取到 data.document，并给它起个新名字叫 figmaDocument
    const { document: figmaDocument } = data
    const home = figmaDocument.children[0].children[2]
    const introduction = home.children[1]
    const [title, description] = introduction.children

  // 找到 DOM 元素并替换文字
  const introTitle = document.querySelector('.intro h3')
  const introDesc = document.querySelector('.intro p')
  introTitle.innerText = title.characters
  introDesc.innerText = description.characters

  })