import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import dic from '../dictionary.json'

import Alert from './Alert'

const customText = (str) => {
  let reText = ''
  const arr = str.split(/([0-9])/)
  arr.splice(1).map((value) => {
    reText += value + '\n'
  })
  if (arr.length === 1) reText += arr[0]
  console.log(arr)
  return (reText)
}

const Card = (props) => {
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')

  const exampleTab = (key) => {
    if (dic.hasOwnProperty(key)) {
      setShow(true)
      setText(customText(dic[key]))
    }
  }

  const handleCloseTab = () => {
    setShow(false)
  }

  return (
    <div className='col col-md-4' key={props.index}>
      <ReactCardFlip
        isFlipped={props.isFlipped}
        flipSpeedBackToFront={2}
        flipSpeedFrontToBack={2}
        key={props.index}
      >
        <div className='card text-center' style={{ width: 200, height: 240 }} onClick={() => props.handleClick(props.index)}>
          <div className='card-header'>
                        W O R D {props.value.STT}
          </div>
          <div className='card-body'>
            <h3 className='g-color-white-opacity-0_8 g-font-size-13'>{props.value['Tiếng Anh']}</h3>
            <h6 className='card-subtitle mb-2 text-muted'>{props.value['Phiên âm']}</h6>
            <h6 className='blockquote-footer'>Type: <cite title='Source Title' style={{ textTransform: 'uppercase' }}>{props.value['Loại từ']}</cite></h6>
            {/* {value['Đồng nghĩa'] && <p className='card-text'><i>synonym:</i> {value['Đồng nghĩa']}</p>} */}
          </div>
        </div>

        <div className='card text-center' style={{ width: 200, height: 240 }}>
          <div className='card-header' onClick={() => props.handleClick(props.index)}>
                        I N F O
          </div>
          <div className='card-body' onClick={() => props.handleClick(props.index)}>
            <h5 className='card-title'>{props.value['Tiếng Anh']}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>{props.value['Phiên âm']}</h6>
            <p className='card-text'>{props.value['Tiếng Việt']}</p>
          </div>
          <button type='button' className='btn btn-outline-info btn-sm btn-block' onClick={() => exampleTab(props.value['Tiếng Anh'])}>Example</button>
        </div>
      </ReactCardFlip>
      <Alert show={show} text={text} handleClick={handleCloseTab} title={props.value['Tiếng Anh']} />
    </div>
  )
}

export default Card
