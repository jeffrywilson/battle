import { Beast } from '../Beast';
import { BattleRoyaleLog } from './BattleRoyaleLog';

type Safe = Beast[];
type Eliminated = Beast[];

export type BattleRoundOutput = [Safe, Eliminated, BattleRoyaleLog];
