import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { IWaiver, postWaiver } from '../store/waivers'
import { ApplicationState } from '../store'

export const useWaivers = () => {
  // const dispatch = useDispatch()

  const loading: boolean = useSelector(
    (state: ApplicationState): boolean => state.waivers.loading
  )
  const waivers: IWaiver[] = useSelector(
    (state: ApplicationState): IWaiver[] => state.waivers.data
  )
  const posting: boolean = useSelector(
    (state: ApplicationState): boolean => state.waivers.posting
  )

  const getWaiverBySlug = useCallback(
    (slug: string): IWaiver | undefined =>
      waivers.find((waiver: IWaiver) => waiver.slug === slug),
    [waivers]
  )

  // const handlePostWaiver = useCallback(
  //   (data: any) => {
  //     dispatch(postWaiver(data))
  //   },
  //   [dispatch]
  // )

  return {
    loading,
    waivers,
    getWaiverBySlug,
    postWaiver,
    posting,
  }
}
