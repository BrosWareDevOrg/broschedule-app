'use client';
import Spline from '@splinetool/react-spline';


export default function SplineCanva({ scene, ...props }) {
  return (
    <div className="w-full h-full flex items-center justify-center wrap bg-transparent">
      <Spline
        scene={
          scene ||
          'https://prod.spline.design/88OwVBhOEhA5mwn6/scene.splinecode'
        }
        className="w-full h-full"
        {...props}
      />
    </div>
  );
}
