import { BattleRoyaleLog } from 'src/types/battle-royale/BattleRoyaleLog';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('battle-royale')
export class BattleRoyale {
  @PrimaryColumn()
  id: string;
  @Column('text', { array: true })
  beasts: string[];
  @Column()
  start_date: Date;
  @Column({ type: 'jsonb' })
  battle_logs: BattleRoyaleLog;
  @Column('text', { array: true })
  winners: string[];
  @Column('text', { array: true })
  staked_accounts: string[];
}
