import Image from '../../common/Image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import {
  PostContainer,
  ImageContainer,
  InfoContainer,
  TravelName,
  TagContainer,
  Tag,
  BottomContainer,
  InfoContainerHeader,
  AuthorInfoContainer,
  LikeAndCommentContainer,
  AvatarWrapper,
} from './style';

const Post = ({ title, image, author, likes, commentLength, userId }) => {
  const { fullName, username } = author;
  const [_, author_age, author_gender] = fullName.split('/');
  const [travel_name, travel_date, travel_personnel, travel_gender] = title.split('/');
  const likesUserList = likes.filter(({ user }) => user === userId).length > 0;

  return (
    <PostContainer>
      <ImageContainer>
        <Image
          src={image ? image : 'https://via.placeholder.com/280x180'}
          width="100%"
          height="100%"
          style={{ borderRadius: '16px' }}
          lazy={true}
          threshold={0.5}
        />
      </ImageContainer>
      <InfoContainer>
        <InfoContainerHeader>
          <TravelName>{travel_name}</TravelName>
          <FavoriteIcon style={{ color: likesUserList ? 'red' : 'gray', fontSize: '35px' }} />
        </InfoContainerHeader>
        <TagContainer>
          <Tag>{travel_date}</Tag>
          <Tag>{travel_gender}</Tag>
          <Tag>{travel_personnel}인</Tag>
        </TagContainer>
        <BottomContainer>
          <AuthorInfoContainer>
            <AvatarWrapper>
              {author.image ? (
                <Image
                  src={author.image}
                  width="100%"
                  height="100%"
                  style={{ borderRadius: '50%' }}
                  lazy={true}
                  threshold={0.5}
                />
              ) : (
                <PersonIcon
                  style={{
                    position: 'relative',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    fontSize: '35px',
                    color: '#adadad',
                  }}
                />
              )}
            </AvatarWrapper>
            <div>
              <div>{username}</div>
              <div>
                {author_age} / {author_gender}
              </div>
            </div>
          </AuthorInfoContainer>
          <LikeAndCommentContainer>
            <div>좋아요 {likes.length}</div>
            <div>댓글 {commentLength}</div>
          </LikeAndCommentContainer>
        </BottomContainer>
      </InfoContainer>
    </PostContainer>
  );
};

export default Post;
