import iconsSprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
  className?:string;
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width= {props.width || "50"} height= {props.height || "50"} viewBox= {props.viewBox || "0 0 50 50"} className={props.className}
      preserveAspectRatio="xMidYMid meet">
        <use xlinkHref= {`${iconsSprite}#${props.iconId}`}/>
      </svg>
  )
}
