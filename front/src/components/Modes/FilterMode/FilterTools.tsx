import { MdBlurCircular } from 'react-icons/md';
import { TbColorFilter } from 'react-icons/tb';

import ToolButton from '../../ToolboxBar/ToolButton/ToolButton';

export default function () {
  return (
    <div className="tools-container">
      <ToolButton Icon={MdBlurCircular} hintText="Blur" />
      <ToolButton Icon={TbColorFilter} hintText="Colors" />
    </div>
  );
}
