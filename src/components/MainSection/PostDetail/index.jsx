import usePostDetail from '../../../hooks/usePostDetail';
import Skeleton from '../../common/Skeleton';
import Heart from '../Like';
import AuthorInfo from '../Post/AuthorInfo';
import LeftImage from '../Post/LeftImage';
import Tags from '../Post/Tags';
import Comments from './Comments';
import {
  BottomContainer,
  Content,
  Country,
  PostDetailContainer,
  RightContainer,
  RightContainerContent,
  Title,
} from './style';

const PostDetail = () => {
  const { post } = usePostDetail();

  return post ? (
    <PostDetailContainer>
      <LeftImage src={post.image} width={'50%'} height={'100%'} style={{ borderRadius: '16px' }} />
      <RightContainer>
        <RightContainerContent alignItem="flex-start" style={{ paddingBottom: '60px' }}>
          <Title>{post.title}</Title>
        </RightContainerContent>

        <RightContainerContent
          flexDirection="row"
          justifyContent="space-between"
          alignItem="flex-end"
          style={{ paddingBottom: '20px' }}
        >
          <AuthorInfo image={post.author.image} fullName={post.author.fullName} />
          <Country>
            <img src={require('../../../../static/images/Location.png')} />
            <span>{post.country}</span>
          </Country>
        </RightContainerContent>
        <RightContainerContent flexDirection="row" justifyContent="space-between">
          <Tags
            date={post.date}
            gender={post.gender}
            personnel={post.personnel}
            alignItem="flex-end"
          />
          <RightContainerContent flexDirection="row">
            <Heart likes={post.likes} author={post.author} postId={post._id} />
          </RightContainerContent>
        </RightContainerContent>
        <Content>{post.content}</Content>
        <BottomContainer alignItem="flex-start">
          <Comments postId={post._id} comments={post.comments} />
        </BottomContainer>
      </RightContainer>
    </PostDetailContainer>
  ) : (
    <Skeleton.Detail line={4} />
  );
};

export default PostDetail;
