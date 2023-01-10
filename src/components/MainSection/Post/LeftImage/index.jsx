import { ImageContainer } from './style';
import Image from '../../../common/Image';

const LeftImage = ({ src, width, height, style }) => {
  return (
    <ImageContainer width={width} height={height}>
      <Image
        src={src ? src : 'https://via.placeholder.com/280x180'}
        style={style}
        lazy={true}
        threshold={0.5}
      />
    </ImageContainer>
  );
};

export default LeftImage;
