// import { Rect, Transformer } from "react-konva";

// const Crop = () => {
//   return (
//     <>
//       <Rect
//         draggable={selectedMode.name === 'Resize Mode' ? true : false}
//         ref={borderRef}
//         x={2}
//         y={2}
//         width={stageScale.stageWidth - 4}
//         height={stageScale.stageHeight - 4}
//         stroke={'red'}
//         strokeWidth={2}
//         onTransformEnd={(e) => {
//           // transformer is changing scale of the node
//           // and NOT its width or height
//           // but in the store we have only width and height
//           // to match the data better we will reset scale on transform end
//           const node = borderRef.current!;
//           const scaleX = node.scaleX();
//           const scaleY = node.scaleY();

//           // we will reset it back
//           node.scaleX(1);
//           node.scaleY(1);
//           node.width(Math.max(5, node.width() * scaleX));
//           node.height(Math.max(node.height() * scaleY));
//         }}
//       />
//       <Transformer ref={transformerRef} />
//     </>
//   );
// };
