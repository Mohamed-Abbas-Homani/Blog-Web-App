import React from 'react'
import Widget from '../ui/Widget'
import { usePosts } from '../../services/store'
import { Box } from '@mui/material'
import Post from './Post'

const Posts = () => {
    const posts = usePosts()
  return (
    <Box width="89%">
        {posts.map((post) => <Post post={post} key={post.ID}/>)}
    </Box>
  )
}

export default Posts