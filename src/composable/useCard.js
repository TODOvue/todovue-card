import { computed } from "vue";

const useCard = (props, emit) => {
  const handleClick = () => {
    emit("clickButton");
  };
  
  const handleSecondaryClick = () => {
    emit("clickSecondaryButton");
  };
  
  const handleClickLabel = (label) => {
    emit("clickLabel", label);
  };
  
  const _getCustomStyle = (config, bgKey, colorKey) => {
    const backgroundColor = config[bgKey];
    const color = config[colorKey];
    
    return backgroundColor || color
      ? { backgroundColor: backgroundColor ?? null, color: color ?? null }
      : null;
  };
  
  const card = computed(() => {
    if (!props.configCard) return null;
    
    const {
      image,
      alt,
      description,
      title,
      primaryButtonText,
      secondaryButtonText,
      labels,
      limitLabels = 3,
      backgroundColor,
      color,
      backgroundButtonColor,
      colorButton,
      backgroundButtonSecondaryColor,
      colorButtonSecondary,
    } = props.configCard;
    
    return {
      image,
      alt,
      description,
      title,
      primaryButtonText,
      secondaryButtonText: secondaryButtonText ?? undefined,
      labels: labels ?? undefined,
      limitLabels,
      customStyleCard: _getCustomStyle({ backgroundColor, color }, "backgroundColor", "color"),
      customStyleButton: _getCustomStyle({ backgroundButtonColor, colorButton }, "backgroundButtonColor", "colorButton"),
      customStyleButtonSecondary: _getCustomStyle({ backgroundButtonSecondaryColor, colorButtonSecondary }, "backgroundButtonSecondaryColor", "colorButtonSecondary"),
    };
  });
  
  return {
    handleClick,
    handleClickLabel,
    handleSecondaryClick,
    card,
  };
};

export default useCard;
