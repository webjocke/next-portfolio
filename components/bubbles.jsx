"use client"

import { useD3 } from '../hooks/useD3'
import React, {Component} from 'react'
import * as d3 from "d3"
import './bubbles.css'



export function Bubbles({ data }) {

    
    const values = data.children.map(d => d.value)
    const min = Math.min.apply(null, values)
    const max = Math.max.apply(null, values)
    const diameter = 600
    const marginRight = 25
    let idx = 0

    const getItemColor = (item) => getColor(idx++, data.children.length)

    function getColor(idx, total) {
        const colorList = ['F05A24','EF4E4A','EE3F65','EC297B','E3236C','D91C5C','BC1E60','9E1F63','992271','952480','90278E','7A2A8F','652D90','502980','3B2671','262261','27286D','292D78','2A3384','2B388F','2A4F9F','2965AF','277CC0','2692D0','25A9E0'];
        const colorLookup = [
            [0,4,10,18,24],
            [0,3,6,9,11,13,15,18,20,24],
            [0,3,4,6,7,9,11,13,14,15,17,18,20,22,24],
            [0,2,3,4,6,7,8,9,11,12,13,14,15,17,18,19,20,22,23,24],
            [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
        ];  
        for (const idxList of colorLookup) {
            if (idxList.length >= total) {
                return '#' + colorList[idxList[idx]]
            }
        }
    }
    
    function getLabel(item) {
        // if (item.data.value < max / 3.3) {
        //     return ''
        // }
        return truncate(item.data.name)
    }
    function getValueText(item) {
        if (item.data.value < max / 3.3) {
            return ''
        }
        return item.data.value
    }
    function truncate(label) {
        const max = 11
        if (label.length > max) {
            label = label.slice(0, max) + '...'
        }
        return label
    }
    function getFontSizeForItem(item) {
        const minPx = 6
        const maxPx = 25
        const pxRange = maxPx - minPx
        const dataRange = max - min
        const ratio = pxRange / dataRange
        const size = Math.min(maxPx, Math.round(item.data.value * ratio) + minPx)
        return `${size/2}px`
    }
    function getImageSizeForItem(item) {
        return `100px`
    }

    const ref = useD3(
        (svg) => {
            var bubble = d3.pack().size([diameter, diameter]).padding(10)
            var svg = svg
                .attr('viewBox','0 0 ' + (diameter + marginRight) + ' ' + diameter)
                .attr('width', (diameter + marginRight))
                .attr('height', diameter)
                .attr('class', 'chart-svg')
            var root = d3.hierarchy(data).sum(d=>d.value)

            bubble(root)

            var node = svg
                .selectAll('.node')
                .data(root.children)
                .enter()
                .append('g')
                .attr('class', 'node')
                .attr('transform', d=>'translate(' + d.x + ' ' + d.y + ')')
                .append('g')
                .attr('class', 'graph')
            node
                .append("circle")
                .attr("r", d=>d.r)
                .style("fill", d=>d.data.color)//getItemColor)//.on('mouseover', tip.show).on('mouseout', tip.hide)
            node
                .append("svg:image")
                .attr("x", d=>`-${(d.r*1.3)/2}px`)
                .attr("y", d=>`-${(d.r*1.3)/2}px`)
                .style("text-anchor", "middle")
                .attr('width', d=>d.r*1.3)
                .attr('height', d=>d.r*1.3)
                .style('pointer-events', 'none')
                .attr("xlink:href", d=>d.data.image)// "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png")
            node
                .append("text")
                .attr("dy", "3em")
                // .attr("dy", "0.2em")
                .style("text-anchor", "middle")
                .style('font-family', 'Roboto')
                // .style('font-weight', '100')
                .style('font-size', getFontSizeForItem)
                .text(getLabel)
                .style("fill", "transparent")//"#ffffff")
                .style('pointer-events', 'none')
            // node
            //     .append("text")
            //     .attr("dy", "0em")
            //     // .attr("dy", "1.2em")
            //     .style("text-anchor", "middle")
            //     .style('font-family', 'Roboto')
            //     .style('font-weight', '100')
            //     .style('font-size', getFontSizeForItem)
            //     .text(getValueText)
            //     .style("fill", "#ffffff")
            //     .style('pointer-events', 'none')
        },
        [data.length]
    )

    return (
        <svg ref={ref}></svg>
    )
}

// export default Bubbles