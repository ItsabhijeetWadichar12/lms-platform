import request , {gql} from 'graphql-request'


const MasterUrl="https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master"



export const getCourseList = async()=>{
    const query = gql`
    query CoursesLists {
      coursesLists {
        name
        banner {
          url
        }
        free
        id
        totalChapters
        tags
        auther
      }
    }
    
    `

    const result = await request(MasterUrl, query);
    return result;
}


export const getCourseById = async(id)=>{
  const query = gpl`
  query course {
    coursesList(where: {id: "`+id+`"}) {
      chapterss {
        ... on Chapters {
          id
          name
          video {
            url
          }
        }
      }
      descriptions
      name
      id
      free
      totalChapters
      youtubeUrl
    }
  }
  `
  const result = await request(MasterUrl, query);
    return result;
}