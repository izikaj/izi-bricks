function prepare({title, description}) {
  const id = title.toLocaleLowerCase().replace(/[^a-z0-9]+/, '-');
  const root = document.createElement('div');
  const editor = document.createElement('div');
  const resultWrap = document.createElement('code');
  const result = document.createElement('pre');
  const titleTag = document.createElement('h2');
  const descriptionTag = document.createElement('p');
  const details = document.createElement('div');

  root.id = id;
  root.classList.add('cols');
  editor.classList.add('pane');
  resultWrap.classList.add('pane');
  titleTag.innerText = title;
  descriptionTag.innerText = description;
  details.classList.add('details')
  details.appendChild(titleTag);
  details.appendChild(descriptionTag);
  resultWrap.appendChild(result);

  root.appendChild(details);
  root.appendChild(editor);
  root.appendChild(resultWrap);
  document.body.appendChild(root);

  return {
    editor, result
  }
}

export default prepare;
