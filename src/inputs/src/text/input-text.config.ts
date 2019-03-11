import { InputBaseConfig } from '../base/input-base.config';
import { InjectionToken } from '@angular/core';

export interface InputTextConfigWhitoutType extends InputBaseConfig {
  max?: number;
  min?: number;
}

export interface InputTextConfig extends InputTextConfigWhitoutType {
  type?: 'text';
}

export const INPUT_TEXT_CONFIG = new InjectionToken<InputTextConfigWhitoutType>(
  'INLINE_EDITOR_TEXT_CONFIG',
);

export const INPUT_TEXT_FOR_ROOT_CONFIG = new InjectionToken<
  InputTextConfigWhitoutType
>('INLINE_EDITOR_TEXT_FOR_ROOT_CONFIG');

export const INPUT_TEXT_CONFIG_REGISTRY = <T = InputTextConfigWhitoutType>(
  parentConfig: T,
  forRootConfig: T,
) => ({
  ...forRootConfig,
  ...(parentConfig || {}),
});
