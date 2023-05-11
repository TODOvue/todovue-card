import { computed, getCurrentInstance } from "vue";

const useCard = (props) => {
  const _instance = getCurrentInstance();
  const handleClick = () => {
    _instance.emit("clickButton");
  };

  const handleSecondaryClick = () => {
    _instance.emit("clickSecondaryButton");
  };

  const handleClickLabel = (label) => {
    _instance.emit("clickLabel", label);
  };

  const _getCustomStyle = (configCard, bgKey, colorKey) => {
    if (configCard[bgKey] || configCard[colorKey]) {
      return {
        backgroundColor: configCard[bgKey],
        color: configCard[colorKey],
      };
    }
    return null;
  };

  const _customCard = computed(() => {
    return _getCustomStyle(props.configCard, "backgroundColor", "color");
  });

  const _customButton = computed(() => {
    return _getCustomStyle(
      props.configCard,
      "backgroundButtonColor",
      "colorButton"
    );
  });

  const _customButtonSecondary = computed(() => {
    return _getCustomStyle(
      props.configCard,
      "backgroundButtonSecondaryColor",
      "colorButtonSecondary"
    );
  });

  const card = computed(() => {
    const { configCard } = props;
    if (!configCard) return null;
    return {
      image: configCard.image,
      alt: configCard.alt,
      description: configCard.description,
      title: configCard.title,
      primaryButtonText: configCard.primaryButtonText,
      secondaryButtonText: configCard.secondaryButtonText || null,
      labels: configCard.labels || null,
      limitLabels: configCard.limitLabels || 3,
      customStyleCard: _customCard.value,
      customStyleButton: _customButton.value,
      customStyleButtonSecondary: _customButtonSecondary.value,
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
