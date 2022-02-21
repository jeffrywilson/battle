import { Beast } from '../../types/Beast';
import { BattleRoyaleEvent } from '../../types/battle-royale/BattleRoyaleEvent';
import { BattleRound } from '../../types/battle-royale/BattleRound';
import { FinalBattleRound } from '../../types/battle-royale/FinalRound';
import { BattleRoundOutput } from '../../types/battle-royale/BattleRoundOutput';
import { FinalRoundOutput } from '../../types/battle-royale/FinalRoundOutput';

import equipItems from './equipItems';

const battle = (event: BattleRoyaleEvent): Array<string | string[]> => {
  // Battles maintain a growing log to output
  // Can be set as output data
  const log: Array<string | string[]> = [];

  // List of 'safe' Beasts to begin each Round
  let participants: Beast[] = [];
  // List of eliminated Beasts
  let eliminated: Beast[] = [];

  // Battles take a list of Rounds
  const rounds: BattleRound[] = [...event.rounds];
  // Battle takes a final round
  const finalRound: FinalBattleRound = event.finalRound;

  log.push(`There are ${event.beasts.length} Beasts Competing!`);

  // Freeze input Beasts to avoid mutation
  // Update stats from equipment
  const [equipped, equipmentLog] = equipItems([...event.beasts]);

  participants = equipped;

  log.push(equipmentLog);

  // Iterate Rounds
  rounds.forEach((round: BattleRound, index: number) => {
    const roundNumber = index + 1;

    log.push(`Event #${roundNumber} Begins!`);
    log.push(`${participants.length} Beasts Remain.`);

    const [sf, el, roundLog] = round.processRound({
      beasts: participants,
      associatedAttribute: round.associatedAttribute,
      patronSupport: event.patronSupport,
      patronGifts: event.patronGifts[roundNumber],
    }) as BattleRoundOutput;

    eliminated = [...eliminated, ...el];

    participants = sf;

    log.push(roundLog);
  });

  // Output of victors
  const [first, second, third, el, finalLog] = event.finalRound.processRound({
    beasts: participants,
    associatedAttribute: finalRound.associatedAttribute,
    patronSupport: event.patronSupport,
    // Final Round has no Gifts
    patronGifts: [],
  }) as FinalRoundOutput;

  eliminated = [...eliminated, ...el];

  console.log(first, second, third);

  log.push(finalLog);

  return log;
};

export default battle;
