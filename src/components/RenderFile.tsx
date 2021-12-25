import { sizeInMB } from 'libs/sizeInMB'
import { IFile } from 'libs/types'
import React, { FunctionComponent } from 'react'

const RenderFile: FunctionComponent <{
  file:IFile
}> = ({file:{format,sizeInBytes,name}}) => {
  return (
    <div className="flex items-center w-full p-4 my-2 dark:text-gray-300 text-gray-800">
      <img src={`images/${format}.png`} alt="" className="w-14 h-14"/>
      <span className="mx-2 ">{name}</span>
      <span className="ml-auto">{ sizeInMB(sizeInBytes) }</span>

    </div>
  )
}

export default RenderFile
