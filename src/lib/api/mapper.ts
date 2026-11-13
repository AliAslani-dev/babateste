export type Mapper<DTO, Model> = (dto: DTO) => Model;

export function createMapper<DTO, Model>(
  fn: Mapper<DTO, Model>
): Mapper<DTO, Model> {
  return fn;
}

export function mapList<DTO, Model>(
  mapper: Mapper<DTO, Model>,
  list: DTO[]
): Model[] {
  return list.map(mapper);
}