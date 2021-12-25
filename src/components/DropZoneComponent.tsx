import { useCallback, FunctionComponent, Dispatch } from "react"
import { useDropzone } from "react-dropzone" 
const DropZoneComponent : FunctionComponent<{setFile:Dispatch<any>}>= ({setFile}) => { 

  const onDrop= useCallback( 
    (acceptedFiles) => {
      console.log(acceptedFiles);
      setFile(acceptedFiles[0])
    },
    [],
  )
  const {getRootProps, getInputProps, isDragAccept, isDragReject}= useDropzone({onDrop,
  multiple:false,
  });

  return (
    <div className="p-4 w-full" >
      <div {...getRootProps()} className="box">
        <input {...getInputProps()}/>
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-yellow-light rounded-xl">
          <img src="/images/folder.png" alt="folder" className="image" />
{
  isDragReject? <p>Sorry unaccepted file format</p>
  :
  <>
      <p>DRAG AND DROP HERE!</p>
        <p className="mt-2 text-base text-gray-300">Drop you files!</p>
  </>

}
        
        </div>
      </div>
    </div>
  )
}

export default DropZoneComponent
