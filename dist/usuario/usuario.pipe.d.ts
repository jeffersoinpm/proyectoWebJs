import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class UsuarioPipe implements PipeTransform {
    private readonly schema;
    constructor(schema: any);
    transform(valorEnBrutoDelRequest: any, metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata): any;
}
