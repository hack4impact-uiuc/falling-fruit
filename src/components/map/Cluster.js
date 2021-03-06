import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

/**
 * The minimum cluster diameter in pixels.
 * @constant {number}
 */
const MIN_CLUSTER_DIAMETER = 30

/**
 * The maximum cluster diameter in pixels.
 * @constant {number}
 */
const MAX_CLUSTER_DIAMETER = 100

const ClusterContainer = styled.button`
  width: ${(props) => props.diameter}px;
  height: ${(props) => props.diameter}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;
  color: white;
  background: ${({ theme }) => theme.blue};
  box-shadow: 0 0 4px 1px ${({ theme }) => theme.shadow};
  transform: translate(-50%, -50%);
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

/**
 * Helper function to round and format cluster labels
 * @function formatClusterLabel
 * @param {number} count - The total number of locations within this cluster
 * @return {string} - The rounded number label
 */
const formatClusterLabel = (count) =>
  count < 1000 ? count : `${Math.ceil(count / 1000)}K`

/**
 * Helper function to calculate a cluster's diameter given its count
 * @function calculateDiameter
 * @param {number} count - The total number of locations within this cluster
 * @return {number} - The diameter of the cluster in pixels
 */
const calculateDiameter = (count) =>
  Math.min(
    Math.max((Math.round(Math.log10(count)) + 2) * 10, MIN_CLUSTER_DIAMETER),
    MAX_CLUSTER_DIAMETER,
  )

/**
 * Component for a cluster displayed on the map.
 * @param {function} onClick - The handler called when this cluster is clicked
 * @param {number} count - The total number of locations within this cluster
 */
const Cluster = ({ onClick, count }) => (
  <ClusterContainer diameter={calculateDiameter(count)} onClick={onClick}>
    <p>{formatClusterLabel(count)}</p>
  </ClusterContainer>
)

Cluster.propTypes = {
  onClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

export default Cluster
