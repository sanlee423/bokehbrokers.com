import * as React from 'react';

interface CanvasProps {
  imgSrc: string;
}

export default function SquareImage(props: CanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas && canvas.parentElement) {
      const image = new Image();
      image.src = props.imgSrc;
      console.log(image.src);
      const ctx = canvas.getContext('2d');
      canvas.width = canvas.parentElement?.offsetWidth;
      canvas.height = canvas.parentElement?.offsetHeight;

      if (ctx) {
        const w = image.naturalWidth;
        const h = image.naturalHeight;

        // Get the min scale to fit the image to the canvas
        const scale = Math.min(canvas.width / w, canvas.height / h);

        // Set the transform to scale the image, and center to the canvas
        ctx.setTransform(
          scale,
          0,
          0,
          scale,
          canvas.width / 2,
          canvas.height / 2,
        );

        // draw the image offset by half its width and height to center and fit
        ctx.drawImage(image, -w / 2, -h / 2, w, h);
      }
    }
  }, [props.imgSrc]);

  return <canvas ref={canvasRef}></canvas>;
}
