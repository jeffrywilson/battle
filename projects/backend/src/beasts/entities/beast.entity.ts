import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'beast',
})
export class Beast {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: String,
    unique: true,
  })
  tokenId: string;

  @Column({
    type: String,
  })
  owner: string;
}
