import React, { useState, useEffect } from 'react'
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading'
import { useInView } from 'react-intersection-observer'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`

const StyledLoadedImg = styled.img`
    animation: ${fadeIn} 1s 0s ease;
    animation-fill-mode: forwards;

    opacity: 0;
`

const StyledPreloadedImg = styled.img`
    animation-fill-mode: forwards;
    ${(props) => props.visible ? `animation: ${fadeOut} 1s 0s ease` : null}

    opacity: 1;
`

const LazyImage = ({ width, height, src, ...rest }) => {

    const supportsLazyLoading = useNativeLazyLoading()
    const [ref, inView] = useInView({
        triggerOnce: true,
        // rootMargin: '200px 0px',
        threshold: 0.50,
    })

    return (
        <div
            ref={!supportsLazyLoading ? ref : undefined}
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexGrow: 2,
            }}
        >
        {inView || supportsLazyLoading ? (
                <StyledLoadedImg
                    visible={inView}
                    {...rest}
                    src={`/static/${src}.png`}
                    loading="lazy"
                    width="auto"
                    height={height}
                    style={{
                        maxHeight: '70vh',
                        maxWidth: '55vw',
                    }}
                />
        ) : (
                <StyledPreloadedImg
                    visible={inView}
                    width={width}
                    height={height}
                    src={`/static/${src}_small.png`}
                    style={{
                        maxHeight: '70vh',
                        maxWidth: '55vw',
                        width: `${width}px`,
                        height: `${height}px`,
                        objectFit: 'contain',
                    }}
                />
            )
        }
        </div>
  )
}

export default LazyImage
