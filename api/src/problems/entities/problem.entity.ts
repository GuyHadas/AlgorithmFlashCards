import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
// @Index(['accountId', 'serviceProvider'], { where: '"deleted_at" IS NULL', unique: true })
export class Problem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  difficulty: string;

  @Column()
  descriptionImgUrl: string;

  @Column()
  encryptedAccessToken: string;

  @Column()
  encryptedRefreshToken: string;

  @Column()
  awsKmsKeyId: string;

  @Column()
  connectedEmail: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('text', { array: true, nullable: true })
  scopes: string[] | null;
}

// PROBLEM
// title
// difficulty
// problem image URL
// description image URL
// solutions
// tags

// SOLUTION
// codeImageUrl
// summary
// pseudocodeSteps
// timeComplexity
// spaceComplexity
// supportingImageUrl
// problemId
// isAcceptable
// rank (1 is best, 2 is second best, etc.)

// TAGS
// problemId
// category (linkedList, dynamicProgramming, etc. )
