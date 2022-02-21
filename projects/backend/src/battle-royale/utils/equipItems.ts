import { Beast } from '../../types/Beast';
import { BattleRoyaleEquipment } from '../../types/battle-royale/BattleRoyaleEquipment';
import { EquipmentTypeDisplayNames } from '../../types/EquipmentType';

const equipItems = (beasts: Beast[]): [Beast[], string[]] => {
  const log = ['Beasts are donning their equipment!'];

  let counter = 0;

  const equipped = beasts.map((beast: Beast) => {
    if (beast.equipment.length < 1) return beast;

    const statBlock = {
      ...beast.statBlock,
    };

    beast.equipment.forEach(
      ({ attribute, modifier, type }: BattleRoyaleEquipment) => {
        log.push(
          `Beast #${beast.tokenId} equipped a ${EquipmentTypeDisplayNames[type]}`,
        );

        statBlock[attribute] = statBlock[attribute] + modifier;

        counter += 1;
      },
    );

    return {
      ...beast,
      statBlock,
    };
  });

  if (counter === 0) log.push('No Beasts brought equipment today...');
  else log.push(`${counter} pieces of equipment have been donned!`);

  return [equipped, log];
};

export default equipItems;
