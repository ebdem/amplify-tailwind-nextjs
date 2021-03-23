import { withAuthenticator } from '@aws-amplify/ui-react'
import React from 'react'
import { API, Storage } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { createPost } from '../graphql/mutations'

const initialState = { name: '', description: '' }

function CreatePost(){
    const [post, setPost] = React.useState(initialState)
    const {name, description} = post;
    const router = useRouter();
    const [image, setImage] = React.useState(null)
    const hiddenFileInput = React.useRef(null)

    function onChange(e){
            setPost(() => ({...post, [e.target.name] : e.target.value}))
    }

    async function createNewPost(){
        if (!name || !description) return
        const id = uuid()
        post.id = id

        if (image) {
      const fileName = `${image.name}_${uuid()}`
      post.coverImage = fileName
      await Storage.put(fileName, image)
    }

        await API.graphql({
            query: createPost,
            variables : {input : post},
            authMode : "AMAZON_COGNITO_USER_POOLS"
        })
        router.push(`/posts/${id}`);
    }

     async function uploadImage() {
    hiddenFileInput.current.click();
  }
  function handleChange (e) {
    const fileUploaded = e.target.files[0];
    if (!fileUploaded) return
    setImage(fileUploaded)
  }
    
    return (
        <div >
          <h2  className="text-3xl font-semibold tracking-wide mt-6">Create new Post</h2>
          <input
            onChange={onChange}
            name="name"
            placeholder="Name"
            value={post.name}
            className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
          /> 
          {
        image && (
          <img src={URL.createObjectURL(image)} className="my-4" />
        )
      }
          <SimpleMDE value={post.content} onChange={value => setPost({ ...post, description: value })} />
           <input
        type="file"
        ref={hiddenFileInput}
        className="absolute w-0 h-0"
        onChange={handleChange}
      />
      <button
        className="bg-purple-600 text-white font-semibold px-8 py-2 rounded-lg mr-2" 
        onClick={uploadImage}        
      >
        Upload Cover Image
      </button>
          <button  className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg" onClick={createNewPost}>Create Post</button>
        </div>
      )
}

export default withAuthenticator(CreatePost);