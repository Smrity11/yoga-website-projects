

import { FiMessageSquare } from 'react-icons/fi';
import { Link, useLoaderData } from 'react-router-dom';

function BlogPostCard() {
   const blogData= useLoaderData()
  const demoContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, ex in mattis laoreet, sapien dui tincidunt odio, eu facilisis eros lorem nec lectus. Suspendisse potenti. Maecenas accumsan malesuada libero, non malesuada purus.`;

  return (
    <div>
        
        {
        blogData.map(blog => <div key={blog.id}>
             <div className="w-full lg:overflow-hidden lg:w-full lg:mx-4 lg:p-4 lg:flex">
      <img
        src={blog?.image || 'https://cdn.yogajournal.com/wp-content/uploads/2009/12/yoga-trainer-conducting-a-class-in-gym-picture-id700718932.jpg?crop=535:301&width=1070&enable=upscale'}
        alt={blog.title || 'How To Start Yoga in 2023'}
        className="w-full h-auto lg:w-1/2  object-cover object-center lg:mb-0"
      />

      <div className="lg:w-1/2 p-4">
        <p className="text-fuchsia-600 mb-2">{blog.category}</p>

        <h1 className="text-xl font-semibold mb-2">{blog.title}</h1>

        <p className="text-gray-600 mb-2 max-w-[90%]">
          {blog?.content || demoContent}
        </p>

        <div className="text-gray-500 text-sm mb-2">
          {blog.author || 'Author'} • {blog.date || '12 August 2023'}
        </div>

        <div className="flex items-center text-gray-500 mb-2">
          <FiMessageSquare className="mr-1" />
          Comment
        </div>

       <Link to="/commingsoon">
       <button className="bg-fuchsia-600 text-white py-2 px-4 hover:bg-fuchsia-700 transition duration-300">
          Read More
        </button>
       </Link>
      </div>
    </div>
        </div>)
    }
    </div>
   
  );
}
function Blog() {

  const yogaTags = ["Yoga for Beginners", "Vinyasa Yoga", "Hatha Yoga", "Yoga Poses", "Yoga Benefits"];

  const yogaCategories = [
    { name: "Yoga for Beginners", quantity: 12, link: "/beginners" },
    { name: "Vinyasa Yoga", quantity: 19, link: "/vinyasa" },
    { name: "Hatha Yoga", quantity: 6, link: "/hatha" },
    { name: "Yoga Poses", quantity: 21, link: "/poses" },
    { name: "Yoga Benefits", quantity: 13, link: "/benefits" },
    { name: "Yoga Lifestyle", quantity: 3, link: "/lifestyle" },
    { name: "Yoga Retreats", quantity: 18, link: "/retreats" },
    { name: "Meditation", quantity: 10, link: "/meditation" },
  ];

  const popularClass = {
    image: "https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?cs=srgb&dl=pexels-gustavo-fring-3984340.jpg&fm=jpg",
    teacherName: "Marlin",
    className: "Yoga Flow for All Levels",
  };

  const latestPost = {
    image: "https://media.istockphoto.com/id/1076947060/photo/yogi-black-woman-practicing-yoga-lesson-doing-ardha-padmasana-exercise.jpg?s=612x612&w=0&k=20&c=hV8qqo47DAJ6cMsPR6lYWZQy27rapXz6mD7codWZaQg=",
    title: "Best Yoga Tips in 2023",
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex">
      <div className="lg:w-2/1">
        <BlogPostCard />
      </div>
      <div className="lg:w-3/5">
      {/* Latest posts */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Latest Post</h2>
        <div className="p-4 flex">
          <img src={latestPost.image} alt={latestPost.title} className="w-1/2 h-auto" />
          <div className="p-4">
            <h1 className="text-fuchsia-600">{latestPost.title}</h1>
          </div>
        </div>
      </div>
      {/* Latest Posts */}
        {/* Categories */}
        <div className="p-4">
  <h2 className="text-xl font-semibold mb-4">Post Categories</h2>
  <ul>
    {yogaCategories.map((category, index) => (
      <li
        key={index}
        className="text-lg font-semibold mb-2 border-b-2 border-fuchsia-300  px-2"
        style={{ transition: 'color 0.3s' }}
      >
        <a href={category.link} className="hover:text-fuchsia-300">
          {category.name} ({category.quantity})
        </a>
      </li>
    ))}
  </ul>
</div>
{/* Categories */}
{/* Post Tags */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Post Tags</h2>
          <div className="flex flex-wrap">
            {yogaTags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
{/* Post Tags */}
      {/* Popular Classes */}
      <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Popular Class</h2>
          <div className="bg-gray-100 p-4">
            <img src={popularClass.image} alt={popularClass.className} className="w-full h-auto" />
            <h1 className="text-fuchsia-600 mt-1">{popularClass.teacherName}</h1>
            <p className="text-black text-lg font-semibold mt-2">{popularClass.className}</p>
          </div>
        </div>
        {/* Popular Classes */}
      </div>
    </div>
  );
}

export default Blog