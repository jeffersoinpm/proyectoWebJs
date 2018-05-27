import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class LugarPipe implements PipeTransform {
    private readonly schema;
    constructor(schema: any);
    transform(valorEnBrutoDelRequest: any, metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata): any;
}
