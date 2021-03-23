import { useEffect, useState, useRef } from 'react'
import { API, Storage } from 'aws-amplify'
import { useRouter } from 'next/router'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { v4 as uuid } from 'uuid'
import { updatePost } from '../../graphql/mutations'
import { getPost } from '../../graphql/queries'


function EditPost(){
    const [post, setPost] = useState(null)
    const router = useRouter()
    const { id } = router.query
    const [coverImage, setCoverImage] = useState(null)
    const [localImage, setLocalImage] = useState(null)
    const fileInput = useRef(null)

      useEffect(() => {
    fetchPost()
    async function fetchPost() {
      if (!id) return
      const postData = await API.graphql({ query: getPost, variables: { id }})
      console.log('postData: ', postData)
      setPost(postData.data.getPost)
      if (postData.data.getPost.coverImage) {
        updateCoverImage(postData.data.getPost.coverImage)
      }
     
    }
  }, [id])

  if (!post) return null
  async function updateCoverImage(coverImage) {
    const imageKey = await Storage.get(coverImage)
    setCoverImage(imageKey)
  }
  async function uploadImage() {
    fileInput.current.click();
  }
  function handleChange (e) {
    const fileUploaded = e.target.files[0];
    if (!fileUploaded) return
    setCoverImage(fileUploaded)
    setLocalImage(URL.createObjectURL(fileUploaded))
  }


   function onChange(e){
        setPost(() => ({...post, [e.target.name] : e.target.value}))
        
    }

  const { name, description } = post
  async function updateCurrentPost() {
    if (!name || !description) return
    const postUpdated = {
      id, name, description
    }

      if (coverImage && localImage) {
      const fileName = `${coverImage.name}_${uuid()}` 
      postUpdated.coverImage = fileName
      await Storage.put(fileName, coverImage)
    }
    
    await API.graphql({
      query: updatePost,
      variables: { input: postUpdated },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    console.log('post successfully updated!')
    router.push('/my-posts')
  }

    return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">Edit post</h1>
    
      <input
        onChange={onChange}
        name="name"
        placeholder="Title"
        value={post.name}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      /> 
       {
        coverImage && <img src={localImage ? localImage : coverImage} className="mt-4" />
      }
      <SimpleMDE value={post.description} onChange={value => setPost({ ...post, description: value })} />
       <input
        type="file"
        ref={fileInput}
        className="absolute w-0 h-0"
        onChange={handleChange}
      />
      <button
        className="bg-purple-600 text-white font-semibold px-8 py-2 rounded-lg mr-2" 
        onClick={uploadImage}        
      >
        Upload Cover Image
      </button>
      <button
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={updateCurrentPost}>Update Post</button>
    </div>
  )

}

export default EditPost;