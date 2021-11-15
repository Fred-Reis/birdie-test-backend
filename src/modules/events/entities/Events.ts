import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("events")
export class Events {
  @PrimaryColumn()
  id!: string;

  @Column()
  payload!: string;

  @Column()
  alert_id!: string;

  @Column()
  task_instance_id!: string;

  @Column()
  visit_id!: string;

  @Column()
  caregiver_id!: string;

  @Column("text")
  payload_as_text!: string;

  @Column()
  rejected_event_id!: string;

  @Column()
  observation_event_id!: string;

  @Column()
  timestamp!: string;

  @Column()
  event_type!: string;

  @Column()
  care_recipient_id!: string;
}
