import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import EditIcon from '@mui/icons-material/Edit'
import { blogs } from '../../portfolio'
import './Blog.css'

const Blog = () => {
  // Convert the blogs object to an array and filter filled entries
  const blogList = Object.values(blogs).filter(
    (blog) => blog?.name && blog?.name.trim() !== ''
  )

  if (!blogList.length) return null

  return (
    <section className='section skills' id='blogs'>
      <h2 className='section__title'>Blogs and open-source contributions</h2>
      <ul className='blogs__list'>
        {blogList.map((blog) => (
          <li key={uniqid()} className='blogs__list-item btn btn--plain'>
            <a
              href={blog.link || '#'}
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {blog.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Blog
