import QRcode from 'qrcode'

import BgImage_1 from '~/images/design_pattern_1.png'
import BgImage_2 from '~/images/design_pattern_2.png'

export const BgImages = [BgImage_1, BgImage_2]
export type ColorValues = '#6EEBFF' | '#FFAA00' | '#FFE000' | '#FFFA50'

export const SelectColors: ColorValues[] = [
  '#6EEBFF',
  '#FFAA00',
  '#FFE000',
  '#FFFA50'
]

export type CanvasTextsProps = {
  organization?: string
  first_name?: string
  first_name_kana?: string
  last_name?: string
  last_name_kana?: string
  yomi?: string
  position?: string
  department?: string
  url?: string
}

type onUpdateCanvasTypes = (
  CanvasEl: HTMLCanvasElement,
  texts: CanvasTextsProps,
  color: ColorValues,
  BgImage: StaticImageData
) => Promise<void>

export const onUpdateCanvas: onUpdateCanvasTypes = async (
  CanvasEl,
  texts,
  color = '#6EEBFF',
  BgImage
) => {
  await loadImage(CanvasEl, color, BgImage)
  const position = {
    posX: 1000,
    posY: 290
  }
  await CreateTexts(CanvasEl, texts, position)
  if (texts.url) GenerateQRCode(CanvasEl, color, texts.url)
}

const GenerateQRCode = async (CanvasEl, color, url) => {
  const ctx = CanvasEl.getContext('2d'),
    QR_dataURL = await QRcode.toDataURL(url, {
      color: {
        dark: color ?? '#000000FF',
        light: '#FF0000FF'
      }
    }),
    img = new Image()

  img.src = QR_dataURL
  img.onload = () => {
    const posY = CanvasEl.height - 100
    ctx.drawImage(img, 0, posY, 100, 100)
  }
}

type GenerateImageType = (CanvasEl: HTMLCanvasElement) => Promise<string>

export const GenerateImage: GenerateImageType = (CanvasEl) => {
  const ImageData = CanvasEl.toDataURL()
  return new Promise((resolve) =>
    setTimeout(async () => {
      resolve(ImageData)
    }, 3000)
  )
}

type loadImageProps = (
  CanvasEl: HTMLCanvasElement,
  color: ColorValues,
  BgImage: StaticImageData
) => Promise<boolean>

const loadImage: loadImageProps = (CanvasEl, color, BgImage) => {
  return new Promise((resolve) => {
    const ctx = CanvasEl.getContext('2d')
    const BG_IMAGE = new Image()
    BG_IMAGE.src = BgImage.src
    BG_IMAGE.onload = () => {
      CanvasEl.width = BG_IMAGE.width
      CanvasEl.height = BG_IMAGE.height

      ctx.fillStyle = color
      ctx.fillRect(1, 1, BG_IMAGE.width - 1, BG_IMAGE.height - 2)
      ctx.drawImage(BG_IMAGE, 0, 0)
      resolve(true)
    }
  })
}

const CreateTexts = async (
  CanvasEl: HTMLCanvasElement,
  texts: CanvasTextsProps,
  position: {
    posX: number
    posY: number
  }
) => {
  const ctx = CanvasEl.getContext('2d')
  ctx.fillStyle = '#000000'

  // eslint-disable-next-line prefer-const
  let { posX, posY } = position

  ctx.shadowColor = 'rgba(0, 0, 0, .3)'
  ctx.shadowOffsetX = 0
  ctx.shadowOffsetY = 3
  ctx.shadowBlur = 6

  type TextInitProps = {
    letterSpacing?: string
    size?: number
    text?: string
    _posX?: number
    _posY: number
  }
  const TextInit = async ({
    letterSpacing = '0.3em',
    size = 18,
    text = '',
    _posX = posX,
    _posY = posY
  }: TextInitProps) => {
    CanvasEl.style.letterSpacing = letterSpacing

    ctx.font = `${size}px "hypatia-sans-pro", "Sawarabi Gothic"`
    const textWidth = ctx.measureText(text).width

    ctx.fillText(text, _posX, posY)
    return {
      textWidth
    }
  }

  function ComputedFontSize(a = '', b = '', sample = '', _size) {
    const f = Array.from(a).length,
      l = Array.from(b).length,
      text = f > l ? a : b,
      origin_width = ctx.measureText(sample),
      measure = ctx.measureText(text),
      rate = origin_width.width / measure.width,
      size = _size * rate > _size ? _size : _size * rate

    return size
  }

  await TextInit({
    letterSpacing: '0.3em',
    text: texts.organization,
    _posY: posY
  })

  posY += 50
  await TextInit({
    letterSpacing: '0.2em',
    text: texts.department ?? '',
    size: 20,
    _posY: posY
  })

  posY += 30
  await TextInit({
    letterSpacing: '0.2em',
    text: texts.position ?? '',
    size: 20,
    _posY: posY
  })

  const size = ComputedFontSize(texts.first_name, texts.last_name, 'あああ', 48)

  posY += 100
  const { textWidth } = await TextInit({
    text: texts.first_name ?? '',
    size: size,
    _posY: posY
  })

  await TextInit({
    text: texts.last_name ?? '',
    size: size,
    _posX: posX + textWidth + 30,
    _posY: posY
  })

  const kana_size = ComputedFontSize(
    texts.first_name_kana,
    texts.last_name_kana,
    'Nakano',
    20
  )

  // ふりがな
  posY += 50
  const { textWidth: lastNameKanaPosX } = await TextInit({
    letterSpacing: '0.5em',
    text: texts.first_name_kana ?? '',
    size: kana_size,
    _posY: posY
  })

  const first_name_kana_width = lastNameKanaPosX + 30,
    last_name_kana_PosX =
      first_name_kana_width >= textWidth + 30
        ? lastNameKanaPosX
        : textWidth + 30

  await TextInit({
    letterSpacing: '0.5em',
    text: texts.last_name_kana ?? '',
    size: kana_size,
    _posX: posX + last_name_kana_PosX,
    _posY: posY
  })
}
