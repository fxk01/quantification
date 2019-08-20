import config from './config'
import request from './request'
import pathToRegexp from 'path-to-regexp'
export  {config,request}


export function pathMatchRegexp(regexp, pathname) {
  return pathToRegexp(regexp).exec(pathname)
}
