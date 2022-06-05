import * as React from 'react'

function SvgSlackLogo({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M.806 32.294C.806 15.066 14.772 1.1 32 1.1s31.194 13.966 31.194 31.194S49.228 63.488 32 63.488.806 49.522.806 32.294z"
        fill="#fff"
        stroke="#BBC1CF"
      />
      <path
        d="M22.298 36.709a3.524 3.524 0 01-3.515 3.516 3.524 3.524 0 01-3.516-3.516 3.524 3.524 0 013.516-3.516h3.515v3.516zM24.07 36.709a3.524 3.524 0 013.515-3.516 3.524 3.524 0 013.516 3.516v8.803a3.524 3.524 0 01-3.516 3.515 3.524 3.524 0 01-3.515-3.515v-8.803z"
        fill="#E01E5A"
      />
      <path
        d="M27.585 22.592a3.524 3.524 0 01-3.515-3.516 3.524 3.524 0 013.515-3.515 3.524 3.524 0 013.516 3.515v3.516h-3.516zM27.585 24.363a3.524 3.524 0 013.516 3.516 3.524 3.524 0 01-3.516 3.516h-8.802a3.524 3.524 0 01-3.516-3.516 3.524 3.524 0 013.516-3.516h8.802z"
        fill="#36C5F0"
      />
      <path
        d="M41.702 27.88a3.524 3.524 0 013.516-3.517 3.524 3.524 0 013.515 3.516 3.524 3.524 0 01-3.515 3.516h-3.516v-3.516zM39.931 27.88a3.524 3.524 0 01-3.515 3.515 3.524 3.524 0 01-3.516-3.516v-8.803a3.524 3.524 0 013.516-3.515 3.524 3.524 0 013.515 3.515v8.803z"
        fill="#2EB67D"
      />
      <path
        d="M36.416 41.996a3.524 3.524 0 013.515 3.516 3.524 3.524 0 01-3.515 3.515 3.524 3.524 0 01-3.516-3.515v-3.516h3.516zM36.416 40.225a3.524 3.524 0 01-3.516-3.516 3.524 3.524 0 013.516-3.516h8.802a3.524 3.524 0 013.516 3.516 3.524 3.524 0 01-3.516 3.516h-8.803z"
        fill="#ECB22E"
      />
    </svg>
  )
}

export default SvgSlackLogo