import React, { useState, useEffect } from 'react'
import IdeaCard from '../../../components/IdeaCard'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import CusCard from '../../../components/CusCard'
import axios from 'axios'

import { deployedAPI } from '../../../utils/api.constants'
import { getAllIdeas } from '../../../api/idea'

const ideas = [
  {
    id: '1',
    title: 'Idea 1',
    percentage: 67,
    averageVote: 4.3,
    views: '3.6k',
    src: 'https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/inn16276486529991.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry 1',
    tag: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: '2',
    title: 'Idea 2',
    percentage: 67,
    averageVote: 4.3,
    views: '3.6k',
    src: 'https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/inn16276486529991.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry 1',
    tag: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: '3',
    title: 'Idea 3',
    percentage: 67,
    averageVote: 4.3,
    views: '3.6k',
    src: 'https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/inn16276486529991.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
    tag: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: '4',
    title: 'Idea 4',
    percentage: 67,
    averageVote: 4.3,
    views: '3.6k',
    src: 'https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/inn16276486529991.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
    tag: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: '5',
    title: 'Idea 5',
    percentage: 67,
    averageVote: 4.3,
    views: '3.6k',
    src: 'https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/inn16276486529991.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
    tag: ['tag1', 'tag2', 'tag3'],
  },
]

const MatchIdea = () => {
  const [fetchIdeas, setFetchIdeas] = useState([])

  useEffect(() => {
    const fetchIdea = async () => {
      const allIdeas = await getAllIdeas()
      setFetchIdeas(allIdeas)
    }
    fetchIdea()
  }, [])
  console.log('>>>> fetchIdea', fetchIdeas)

  return (
    <CusCard>
      <OwlCarousel
        className='owl-theme'
        loop margin={15} lazyLoad dots smartSpeed={450} style={{zIndex: 0}}
      >
        {fetchIdeas?.map((idea, index) => (
          <IdeaCard
            key={index}
            className='item'
            idea={idea}
          />
        ))}
      </OwlCarousel>
    </CusCard>
  )
}
export default MatchIdea
