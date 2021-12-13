import Hashtag from './Hashtag';
import DisabledHashtag from './DisabledHashtag';

export { Hashtag, DisabledHashtag };

export interface IHashtag {
  title: string;
  className?: string;
}
