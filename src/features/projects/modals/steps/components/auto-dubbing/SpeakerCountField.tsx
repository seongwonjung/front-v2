import type { UseFormRegisterReturn } from 'react-hook-form'

import { Input } from '@/shared/ui/Input'
import { Label } from '@/shared/ui/Label'
import { ValidationMessage } from '@/shared/ui/ValidationMessage'

type SpeakerCountFieldProps = {
  registration: UseFormRegisterReturn
  error?: string
}

export function AudioSpeakerCountField({ registration, error }: SpeakerCountFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="speaker-count">화자 수</Label>
      <Input id="speaker-count" type="number" min={1} max={10} {...registration} />
      <ValidationMessage message={error} />
      <p className="text-muted text-xs">권장: 1~5명, 최대 10명까지 설정할 수 있습니다.</p>
    </div>
  )
}
