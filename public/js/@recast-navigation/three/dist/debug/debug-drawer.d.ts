import { NavMesh, NavMeshQuery, RecastCompactHeightfield, RecastContourSet, RecastHeightfield, RecastHeightfieldLayer, RecastHeightfieldLayerSet, RecastPolyMesh, RecastPolyMeshDetail } from '@recast-navigation/core';
import * as THREE from 'three';
import { LineMaterial } from 'three-stdlib';
export type DebugDrawerParams = {
    triMaterial?: THREE.Material;
    pointMaterial?: THREE.Material;
    lineMaterial?: LineMaterial;
};
export declare class DebugDrawer extends THREE.Group {
    triMaterial: THREE.Material;
    pointMaterial: THREE.Material;
    pointGeometry: THREE.SphereGeometry;
    lineMaterial: LineMaterial;
    private debugDrawImpl;
    private currentVertices;
    private currentPrimitive;
    constructor({ triMaterial, pointMaterial, lineMaterial, }?: DebugDrawerParams);
    drawHeightfieldSolid(hf: RecastHeightfield): void;
    drawHeightfieldWalkable(hf: RecastHeightfield): void;
    drawCompactHeightfieldSolid(chf: RecastCompactHeightfield): void;
    drawCompactHeightfieldRegions(chf: RecastCompactHeightfield): void;
    drawCompactHeightfieldDistance(chf: RecastCompactHeightfield): void;
    drawHeightfieldLayer(layer: RecastHeightfieldLayer, idx: number): void;
    drawHeightfieldLayers(lset: RecastHeightfieldLayerSet): void;
    drawRegionConnections(cset: RecastContourSet, alpha?: number): void;
    drawRawContours(cset: RecastContourSet, alpha?: number): void;
    drawContours(cset: RecastContourSet, alpha?: number): void;
    drawPolyMesh(mesh: RecastPolyMesh): void;
    drawPolyMeshDetail(dmesh: RecastPolyMeshDetail): void;
    drawNavMesh(mesh: NavMesh, flags?: number): void;
    drawNavMeshWithClosedList(mesh: NavMesh, query: NavMeshQuery, flags?: number): void;
    drawNavMeshNodes(query: NavMeshQuery): void;
    drawNavMeshBVTree(mesh: NavMesh): void;
    drawNavMeshPortals(mesh: NavMesh): void;
    drawNavMeshPolysWithFlags(mesh: NavMesh, flags: number, col: number): void;
    drawNavMeshPoly(mesh: NavMesh, ref: number, col: number): void;
    resize(width: number, height: number): void;
    reset(): void;
    dispose(): void;
    private vertex;
    private endPoints;
    private endLines;
    private endTris;
    private endQuads;
}
