const BackgroundBlur = () => {
    const { scrollY } = useScroll();
    const blur = useTransform(scrollY, [0, 200], [0, 8]);
  
    return (
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(/assets/background.jpg)`,
          backgroundSize: 'cover',
          filter: blur.get() ? `blur(${blur.get()}px)` : 'none'
        }}
      />
    );
  };